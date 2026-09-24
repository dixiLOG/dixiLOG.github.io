(() => {
  // Cloudflare Web Analytics site token.
  // Leave empty until the site has been created in Cloudflare Web Analytics.
  const token = "";

  if (!token) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute("data-cf-beacon", JSON.stringify({ token }));
  document.head.appendChild(script);
})();
