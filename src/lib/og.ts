type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};

export function openGraph({
  siteName,
  templateTitle,
  description,
  logo = 'https://og-n2twworom-theodorusclarence.vercel.app/api/general?description=Start%20Taking%20Notes%20Unleash%20Your%20Creativity%20&logo=https%3A%2F%2Fas1.ftcdn.net%2Fv2%2Fjpg%2F06%2F26%2F98%2F64%2F1000_F_626986420_r3QsElmetQp041zxrREIVt76nyTfMzhH.jpg&siteName=Acme%20Note&theme=light',
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://og.rudrakaniya.com/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
  }`;
}
