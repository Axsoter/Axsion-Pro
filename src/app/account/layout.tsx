export default function AccountLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="min-h-screen mt-[8.75rem] mx-[10%] mb-7">
            { children }
        </main>
    )
}