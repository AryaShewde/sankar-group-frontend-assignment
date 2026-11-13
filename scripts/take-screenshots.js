import { chromium } from 'playwright'

const browser = await chromium.launch()
const context = await browser.newContext()

// Desktop full page - 1440x900
const desktopPage = await context.newPage({ width: 1440, height: 900 })
await desktopPage.goto('http://localhost:5173')
await desktopPage.waitForLoadState('networkidle')
await desktopPage.screenshot({ path: 'screenshots/desktop-full-page.png', fullPage: true })
await desktopPage.close()

// Mobile full page - 375x812
const mobilePage = await context.newPage({ width: 375, height: 812 })
await mobilePage.goto('http://localhost:5173')
await mobilePage.waitForLoadState('networkidle')
await mobilePage.screenshot({ path: 'screenshots/mobile-full-page.png', fullPage: true })
await mobilePage.close()

// Desktop hero section - 1440x900 (clip to hero area below navbar)
const heroPage = await context.newPage({ width: 1440, height: 900 })
await heroPage.goto('http://localhost:5173')
await heroPage.waitForLoadState('networkidle')
await heroPage.screenshot({ path: 'screenshots/desktop-hero.png', clip: { x: 0, y: 80, width: 1440, height: 760 } })
await heroPage.close()

await browser.close()
console.log('Screenshots captured successfully.')
