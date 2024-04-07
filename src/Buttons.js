function Buttons ({filteredPhoto}) {
    return(
        <div className="buttons">
            <button className="change" onClick={() => filteredPhoto("Кухни")}>Кухни</button>
            <button className="change" onClick={() => filteredPhoto("Спальни")}>Спальни</button>
            <button className="change" onClick={() => filteredPhoto("Гостинные")}>Гостинные</button>
            <button className="change" onClick={() => filteredPhoto("Ванные")}>Ванные</button>
        </div>
    )
}

export default Buttons;