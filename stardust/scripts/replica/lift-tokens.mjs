#!/usr/bin/env node
/**
 * lift-tokens.mjs — per-element computed-style lift for a replica archetype.
 * Usage: node lift-tokens.mjs <url> --widths 1440,360 --out <file.json>
 */
import { writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';

function parseArgs(argv) {
  const a = { widths: [1440, 360], out: 'tokens.json' };
  for (let i = 2; i < argv.length; i += 1) {
    const k = argv[i];
    if (k === '--widths') a.widths = argv[(i += 1)].split(',').map(Number);
    else if (k === '--out') a.out = argv[(i += 1)];
    else if (!a.url) a.url = k;
  }
  return a;
}

const SELECTORS = {
  body: 'body',
  header: '#header, header, .site-header',
  logo: 'img[alt*="Logo" i], .logo',
  navBar: '#nav, .nav, nav',
  navLink: '#nav a, .nav a',
  colLeft: '#col-left',
  tocList: '#col-left ul',
  tocListLevel2: '#col-left ul ul',
  tocListLevel3: '#col-left ul ul ul',
  tocLink: '#col-left ul li a',
  addlInfoHeading: '#col-left h2',
  addlInfoIcon: '#col-left img',
  colMain: '#col-main',
  h1: '#col-main h1, h1',
  h2: '#col-main h2, h2',
  bodyPara: '#col-main p',
  ctaLink: '#col-main a',
  contentImg: '#col-main img',
  footer: '#footer, footer, .footer',
  footerHeading: '#footer h3, #footer .heading, .footer h3',
  footerLink: '#footer a, .footer a',
  copyrightBar: '.copyright, #copyright, .footer-bottom',
};

async function computedStyleOf(page, selector) {
  return page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    const props = [
      'display', 'position', 'width', 'maxWidth', 'height', 'minHeight',
      'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
      'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
      'fontFamily', 'fontSize', 'fontWeight', 'fontStyle', 'lineHeight', 'letterSpacing',
      'color', 'backgroundColor', 'backgroundImage', 'backgroundPosition', 'backgroundSize', 'backgroundRepeat',
      'border', 'borderRadius', 'boxShadow', 'textDecoration', 'textTransform', 'textAlign',
      'listStyleType', 'listStylePosition',
      'textRendering', 'WebkitFontSmoothing', 'fontVariantNumeric', 'fontKerning', 'textWrap',
      'float', 'clear', 'overflow', 'gap', 'flexDirection', 'gridTemplateColumns',
    ];
    const out = {};
    for (const p of props) out[p] = cs[p];
    return {
      rect: { x: rect.x, y: rect.y, w: rect.width, h: rect.height },
      computed: out,
      textSample: (el.textContent || '').trim().slice(0, 60),
    };
  }, selector);
}

async function main() {
  const args = parseArgs(process.argv);
  if (!args.url) throw new Error('url required');
  const browser = await chromium.launch();
  const result = { url: args.url, capturedAt: new Date().toISOString(), widths: {} };
  for (const width of args.widths) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      reducedMotion: 'reduce',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    });
    const page = await context.newPage();
    await page.goto(args.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1200);
    const perWidth = {};
    for (const [name, sel] of Object.entries(SELECTORS)) {
      try {
        perWidth[name] = await computedStyleOf(page, sel);
      } catch {
        perWidth[name] = null;
      }
    }
    // document-level facts
    perWidth._doc = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      bodyBg: getComputedStyle(document.body).backgroundColor,
    }));
    result.widths[width] = perWidth;
    await context.close();
  }
  await browser.close();
  await writeFile(args.out, JSON.stringify(result, null, 2));
  console.log(`[lift-tokens] wrote ${args.out}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
