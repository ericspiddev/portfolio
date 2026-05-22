
export default function PortfolioHeader({ header }) {
    return (
    <div className="portfolio-header underline-header" id={`${header.toLowerCase()}-section`}>
        <p> {header} </p>
    </div>
    );
}
