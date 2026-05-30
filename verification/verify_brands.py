from playwright.sync_api import sync_playwright
import os

def run_verification(page):
    # Go to the app
    page.goto("http://localhost:4200")
    page.wait_for_timeout(2000)

    # 1. Verify AquaFair (Default)
    page.screenshot(path="verification/screenshots/aquafair_desktop.png")
    page.wait_for_timeout(1000)

    # 2. Switch to BBQ Nights (Note the space in name)
    # Using text locator to be more robust
    page.get_by_text("BBQ Nights").first.click()
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/bbqnights_desktop.png")
    page.wait_for_timeout(1000)

    # 3. Switch to PizzaHub
    page.get_by_text("PizzaHub").first.click()
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/pizzahub_desktop.png")
    page.wait_for_timeout(1000)

    # 4. Scroll down to show more content (Menu, Gallery, About)
    page.evaluate("window.scrollTo(0, 1500)")
    page.wait_for_timeout(1000)
    page.screenshot(path="verification/screenshots/pizzahub_content.png")

    # 5. Mobile view verification
    page.set_viewport_size({"width": 375, "height": 667})
    page.goto("http://localhost:4200") # Reload for mobile layout checks if any
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/mobile_view.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="verification/videos"
        )
        page = context.new_page()
        try:
            run_verification(page)
        finally:
            context.close()
            browser.close()
