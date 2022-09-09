import Script from 'next/script';

export function Aside() {
  return (
      <div className="one">
      <aside className="w-96" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3">
          <a className="twitter-timeline text-sm" href="https://twitter.com/petecroke">babble, burble, banter, bicker, bicker, bicker</a>
          <Script
              src="https://platform.twitter.com/widgets.js"
              strategy="lazyOnload"
          />
        </div>
      </aside>
      </div>
  )
}
