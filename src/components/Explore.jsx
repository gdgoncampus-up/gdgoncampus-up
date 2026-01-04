import styles from "../components/Explore.module.css"

function Explore(){
 
    return(
    <div className={styles.layout}>
 <div className={styles.background}>
      <div className={styles.text}>
      <h1>Explore upcoming and finished community projects</h1>
      <p>GDGs on Campus provide learning opportunities for aspiring developers from universities and colleges around the world, allowing them to gain hands-on experience, develop essential skills, and build a strong foundation for a tech career. After graduating, GDGs on Campus members can seamlessly transition to a broader GDG community, continuing their learning and collaboration with fellow developers.</p>
      </div>
            <button className={styles.button}>Events</button>
        </div>
    </div>
       
    )

}

export default Explore