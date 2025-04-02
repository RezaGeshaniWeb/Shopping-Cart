import Layouts from "../layouts/Layouts"

export default function NotFoundPage() {
    return (
        <main className="mx-auto max-w-[1200px] min-h-screen p-2.5">
            <Layouts>
                <div className="w-full h-[55vh] flex flex-col justify-center items-center">
                    <p className="text-8xl mb-10 line-through">4<span className="text-red-600">0</span>4</p>
                    <h1 className="text-6xl font-bold italic shadow-2xl">Not Found Page</h1>
                </div>
            </Layouts>
        </main>
    )
}