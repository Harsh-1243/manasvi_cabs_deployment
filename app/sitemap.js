export default function sitemap() {
  const baseUrl = "https://manasvicabs.com";

  
  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/cars", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/locations/ahmedabad", priority: 0.7, changeFrequency: "monthly" },
    { path: "/locations/surat", priority: 0.7, changeFrequency: "monthly" },
    { path: "/locations/vadodara", priority: 0.7, changeFrequency: "monthly" },
    { path: "/locations/rajkot", priority: 0.7, changeFrequency: "monthly" },
    { path: "/locations/bhavnagar", priority: 0.7, changeFrequency: "monthly" },
    { path: "/locations/palitana", priority: 0.7, changeFrequency: "monthly" },
    { path: "/locations/talaja", priority: 0.7, changeFrequency: "monthly" },
    { path: "/terms-of-service", priority: 0.5, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" },
  ];

  // Convert to sitemap format
  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(), // or use a fixed date if preferred
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
