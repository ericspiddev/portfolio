
export default function PortfolioHeader({ header }) {
    return ( 
    <div class="portfolio-header" id={`${header.toLowerCase()}-section`}>
        <p> {header} </p>
    </div>
    );
}
