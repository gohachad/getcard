# IndexNow

`e8127c1b1d929ea0eef9bc2e53d5bd92.txt` is the ownership key for IndexNow, the
push protocol Bing and Yandex accept in place of waiting for a crawl. The file
must keep answering at `https://getcard.kg/e8127c1b1d929ea0eef9bc2e53d5bd92.txt`
with exactly that string, or every submission is rejected.

To tell them a page changed:

    curl -X POST https://api.indexnow.org/indexnow \
      -H 'Content-Type: application/json' \
      -d '{
        "host": "getcard.kg",
        "key": "e8127c1b1d929ea0eef9bc2e53d5bd92",
        "keyLocation": "https://getcard.kg/e8127c1b1d929ea0eef9bc2e53d5bd92.txt",
        "urlList": ["https://getcard.kg/ru/", "https://getcard.kg/en/"]
      }'

Google does not take IndexNow. It is Search Console or nothing there.
