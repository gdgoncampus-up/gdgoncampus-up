import styles from "../components/Header.module.css"

function Header(){

return(
    
        <div className={styles.header}>
            <div className={styles.title}>
                <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/contentbuilder/GDG_Bevy_DefaultChapterThumbnail_5oO1cMY.png" alt="logo" className={styles.logo} />
                <h1>GOOGLE DEVELOPEMENT GROUP</h1>
            </div>
            <div className={styles.menu}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/190px-Hamburger_icon.svg.png" alt="" />
            </div>
        </div>
)


}

export default Header