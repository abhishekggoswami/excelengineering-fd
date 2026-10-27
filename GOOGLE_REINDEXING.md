# Reindexing the Excel Engineering homepage

Use these steps after the deployment is live. The goal is to have Google recrawl the updated homepage title, which is now **Excel Engineering**.

1. Open `https://www.excelengineeringbpl.com` in a private/incognito browser window. Confirm that the browser tab title is **Excel Engineering** and the page loads normally.
2. Sign in to [Google Search Console](https://search.google.com/search-console/) with an account that is an Owner or Full user of the `https://www.excelengineeringbpl.com/` property. If the property has not been verified, complete ownership verification first.
3. In the **URL Inspection** search bar, enter the exact canonical homepage URL: `https://www.excelengineeringbpl.com/`.
4. Click **Test Live URL**. Confirm that Google can fetch the page and that the test does not report a crawl, `noindex`, or access problem.
5. Click **Request Indexing** and wait for the confirmation. Submit this request once; repeatedly requesting the same URL does not make Google crawl it faster.
6. In **Sitemaps**, confirm that `https://www.excelengineeringbpl.com/sitemap.xml` is submitted and processed successfully. Submit it if it is not already listed.
7. Check the same URL in URL Inspection after several days. Also search Google for `site:excelengineeringbpl.com` and the brand name to see when the updated title appears.

## Expected timing

Google states that recrawling can take **a few days to a few weeks**. For this small homepage metadata change, a sensible expectation is **about 3–14 days after requesting indexing**, but Google controls the crawl schedule and may take longer. A successful indexing request does not guarantee that Google will use the exact title or description supplied by the site; Google can rewrite search-result titles and snippets when it considers another version more useful.

Official Google guidance: [request a recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) and [use Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start).
