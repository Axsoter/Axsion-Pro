import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-axsoterBlue">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">welp, there&apos;s nothing here.</p>
                    <p className="mb-4 text-lg font-light text-gray-400">we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                    <Link href="/" className="inline-flex text-white bg-axsoterBlue ease-in-out duration-700 hover:bg-brandGradient font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4">Back to Homepage</Link>
                </div>   
            </div>
        </section>
    )
}