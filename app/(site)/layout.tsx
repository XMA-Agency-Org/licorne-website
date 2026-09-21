import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NavigationProvider } from "@/components/layout/NavigationProvider";
import { sanityFetch } from "@/sanity/lib/live";
import { navigationQuery } from "@/sanity/lib/queries";
import { resolveNavigation } from "@/lib/navigation";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const { data } = await sanityFetch({ query: navigationQuery });
  const navigation = resolveNavigation(data);

  return (
    <NavigationProvider navigation={navigation}>
      <Header navigation={navigation} />
      <main>{children}</main>
      <Footer navigation={navigation} />
    </NavigationProvider>
  );
}
