const siteConfig = {
  links: {
    twitter: "https://twitter.com/momo-shogun",
    github: "https://github.com/momo-shogun",
  },
};

function SiteFooter() {
  return (
    <footer className="px-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row">
        <p className="text-sm leading-loose text-center text-balance text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            DigiCoders
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
