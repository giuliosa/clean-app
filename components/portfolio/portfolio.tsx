import PortfolioGallery from "./portfolio-gallery";

export default function Portfolio() {
    return (
        <section id="portfolio" className="container mx-auto py-16">
            <div className="flex flex-row items-center">
                <div className="px-24">
                    <h3 className="font-sans font-semibold text-lg text-blue-500 mb-4">Portfólio</h3>
                    <h2 className="font-sans text-4xl text-blue-400 mb-4">
                        <b className="font-bold">Alguns trabalhos memoráveis</b> <br />Da nossa galeria
                    </h2>
                </div>
                <div>
                    <p className="pr-40">We shows only the best websites and portfolios built completely with passion, simplicity & creativity.</p>
                </div>
            </div>

            <PortfolioGallery />
        </section>
    )
}