import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { ActionDetail } from "@/components/sections/ActionDetail";
import { ACTIONS, getActionBySlug } from "@/data/actions";

export function generateStaticParams() {
  return ACTIONS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const action = getActionBySlug(slug);
  if (!action) return { title: "Action introuvable" };
  return { title: action.title, description: action.shortDescription };
}

export default async function ActionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const action = getActionBySlug(slug);
  if (!action) notFound();

  return (
    <>
      <PageHero
        title={action.title}
        subtitle={action.shortDescription}
        breadcrumb={[
          { label: "Nos actions", href: "/nos-actions" },
          { label: action.title },
        ]}
        backgroundImage={action.image}
      />
      <ActionDetail action={action} />
    </>
  );
}
