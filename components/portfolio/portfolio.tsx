import PortfolioGallery from "./portfolio-gallery";

export default function Portfolio() {
    return (
        <section className="container mx-auto">
            <div className="flex flex-row">
                <div>
                    <h3>Nosso Portfolio</h3>
                    <h2>Alguns trabalhos</h2>
                </div>
                <div>
                    <p>Texto</p>
                </div>
            </div>

            <PortfolioGallery />
        </section>
    )
}