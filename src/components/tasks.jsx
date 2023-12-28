import TOGGLE from "./toggle"
import TASKINPUT from "./taskInput"
import TASKLIST from "./tasklist"
const TASKS = (props) => {
    return(
        <div className="w-[39%] md:w-[50%] mobile:w-[90%]">
            <section className="toggle">
                <>
                    <TOGGLE themeChangeValue = {props.themeChangeValue} themeChangeFunc = {props.themeChangeFunc} />
                </>
            </section>
            <section>
                <> 
                    <TASKINPUT />
                </>
            </section>
            <section>
                <>
                    <TASKLIST />
                </>
            </section>
        </div>
    )
}

export default TASKS