<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>OHMT Sitemap</title>
        <style>
          :root { color-scheme: light; font-family: Arial, "Noto Sans KR", sans-serif; }
          * { box-sizing: border-box; }
          body { margin: 0; background: #f5f6f7; color: #17191c; }
          main { width: min(1180px, calc(100% - 32px)); margin: 0 auto; padding: 64px 0 80px; }
          header { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 28px; }
          h1 { margin: 0; font-size: clamp(32px, 5vw, 56px); line-height: 1; letter-spacing: -0.05em; }
          p { margin: 12px 0 0; color: #60646c; line-height: 1.6; }
          .count { flex: none; color: #755300; font-size: 14px; font-weight: 700; }
          .table-wrap { overflow: hidden; border: 1px solid #d8dade; border-radius: 12px; background: #fff; }
          table { width: 100%; border-collapse: collapse; }
          th { padding: 14px 18px; background: #eceef0; color: #52565d; font-size: 12px; text-align: left; letter-spacing: 0.04em; }
          td { padding: 15px 18px; border-top: 1px solid #e4e6e8; font-size: 13px; vertical-align: top; }
          td:first-child { width: 64%; }
          a { color: #17191c; font-weight: 600; text-decoration: none; word-break: break-all; }
          a:hover { color: #8a6100; text-decoration: underline; text-underline-offset: 3px; }
          .meta { color: #686c73; white-space: nowrap; }
          @media (max-width: 720px) {
            main { width: min(100% - 24px, 1180px); padding-top: 40px; }
            header { align-items: flex-start; flex-direction: column; }
            th:nth-child(2), td:nth-child(2) { display: none; }
            td:first-child { width: auto; }
            th, td { padding: 13px 14px; }
          }
        </style>
      </head>
      <body>
        <main>
          <header>
            <div>
              <h1>OHMT Sitemap</h1>
              <p>검색엔진이 OHMT의 공개 페이지를 찾을 수 있도록 제공하는 XML 사이트맵입니다.</p>
            </div>
            <div class="count"><xsl:value-of select="count(s:urlset/s:url)" /> URLs</div>
          </header>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Last modified</th>
                  <th>Frequency</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td><a href="{s:loc}"><xsl:value-of select="s:loc" /></a></td>
                    <td class="meta"><xsl:value-of select="substring(s:lastmod, 1, 10)" /></td>
                    <td class="meta"><xsl:value-of select="s:changefreq" /></td>
                    <td class="meta"><xsl:value-of select="s:priority" /></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
