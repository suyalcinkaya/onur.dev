import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.jsx'
import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { GradientBg4 } from '@/components/gradient-bg'
import { getPageSeo } from '@/lib/contentful'
import { WORKSPACE_ITEMS } from '@/lib/constants'

export default async function Workspace() {
  return (
    <ScrollArea className="flex flex-col">
      <GradientBg4 />
      <FloatingHeader title="Workspace" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Workspace" />
          <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-scroll pb-6 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:pb-0">
            <EmptyPlaceholder />
            <img
              src="/assets/workspace-1.webp"
              alt="Workspace | 1"
              className="w-2/3 snap-center object-cover md:w-full md:snap-align-none"
              width={756}
              height={1008}
              loading="eager"
            />
            <img
              src="/assets/workspace-2.webp"
              alt="Workspace | 2"
              className="w-2/3 snap-center object-cover md:w-full md:snap-align-none"
              width={756}
              height={1008}
              loading="eager"
            />
            <EmptyPlaceholder />
          </div>

          <div className="mt-2 overflow-hidden rounded-lg border md:mt-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[300px] px-4">Product</TableHead>
                  <TableHead className="min-w-[300px] px-4">Specs</TableHead>
                  <TableHead className="min-w-[70px] px-4 text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {WORKSPACE_ITEMS.map((item, itemIndex) => (
                  <TableRow key={`workspace-item-${itemIndex}`}>
                    <TableCell className="px-4 py-3 font-medium">{item.title}</TableCell>
                    <TableCell className="px-4 py-3">{item.specs}</TableCell>
                    <TableCell className="px-4 py-3 font-medium">
                      <a
                        href={item.url}
                        className="link break-words after:content-['_↗']"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableCaption className="py-3">
                For other cool stuff, don&lsquo;t forget to check{' '}
                <a
                  href="https://some.wtf"
                  className="link break-words after:content-['_↗']"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  some.wtf
                </a>
              </TableCaption>
            </Table>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}

const EmptyPlaceholder = () => (
  <div className="shrink-0 snap-center md:hidden">
    <div className="w-px shrink-0" />
  </div>
)

export async function generateMetadata() {
  const seoData = await getPageSeo('workspace')
  if (!seoData) return null

  const {
    seo: { title, description }
  } = seoData
  const siteUrl = '/workspace'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl
    },
    alternates: {
      canonical: siteUrl
    }
  }
}
