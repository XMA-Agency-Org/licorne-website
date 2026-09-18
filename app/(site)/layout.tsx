import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { sanityFetch } from "@/sanity/lib/live";
import { navigationQuery } from "@/sanity/lib/queries";
import { resolveNavigation } from "@/lib/navigation";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const { data } = await sanityFetch({ query: navigationQuery });
  const navigation = resolveNavigation(data);

  return (
    <>
      <Header navigation={navigation} />
      <main>{children}</main>
      <Footer navigation={navigation} />
    </>
  );
}
