(() => {
  // Cloudflare Web Analytics site token.
  // Leave empty until the site has been created in Cloudflare Web Analytics.
  const token = "76c7367dadc7456f9a4551bbd35fdce9";

  if (!token) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute("data-cf-beacon", JSON.stringify({ token }));
  document.head.appendChild(script);
})();
