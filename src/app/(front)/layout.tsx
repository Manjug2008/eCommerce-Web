
export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-grow container mx-auto px-4 mt-6 md:mt-2">{children}</main>
  )
}
