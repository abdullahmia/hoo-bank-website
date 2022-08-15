import { stats } from "../constants"
import styles from "../style"

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {
        stats.map((stat, key) => (
          <div key={key} className={`flex-1 flex justify-start items-center flex-row m-3`}>
            <h4 className="font-poppins font-semibold sx:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
            <p className="font-poppins font-normal sx:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white ml-3 uppercase">{stat.title}</p>
          </div>
        ))
      }
    </section>
  )
}

export default Stats