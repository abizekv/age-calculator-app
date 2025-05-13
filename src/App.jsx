import { useState } from "react"
import arrowIcon from "./assets/icon-arrow.svg"
import { calculateAge } from "./calculateAge"
import { useForm } from "react-hook-form"
function App() {

  const [birthDate, setBirthDate] = useState({ day: null, month: null, year: null })
  const [age, setAge] = useState({
    years: "--",
    months: "--",
    days: "--"
  })
  const { handleSubmit, register, formState: { errors } } = useForm()


  function handleChange(e) {
    const name = e.target.name;
    const value = parseInt(e.target.value);
    setBirthDate(currBirthDate => (
      { ...currBirthDate, [name]: value }
    ))
  }



  function onSubmit(data, evt) {
    evt.preventDefault()
    const { dayDiff, monthDiff, yearDiff } = calculateAge(data)
    setAge({
      years: yearDiff,
      months: monthDiff,
      days: dayDiff
    })
  }
  const validations = {
    birthDay: { 
      required: "This field is required" ,
    max:{
      value:31,
      message:"Invalid day"
    },
    min:{
      value:1,
      message:"Invalid day"
    }
    },
    birthMonth: {
      required: "This field is required",
      max:{
        value:12,
        message:"Invalid month"
      },
      min:{
        value:1,
        message:"Invalid month"
      }
},
    birthYear: { required: "This field is required" ,
      minLength:{
        value:4,
        message:"Invalid year"
      }
    }
  }
const invalid = Object.keys(errors).length > 0
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={invalid ? "invalid-form" : ""}>
    
        <div className="input-wrapper">
          <div className="input-group">
            <label htmlFor="day">Day</label>
            <input type="number" name="day" id="day"  placeholder="DD"
              {...register("birthDay", validations.birthDay)}
            />
            {errors.birthDay && <span className="error-message">{errors.birthDay.message}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="month">Month</label>
            <input type="number" name="month" id="month"  placeholder="MM"
              {...register("birthMonth", validations.birthMonth)}
            />
            {errors.birthMonth && <span className="error-message">{errors.birthMonth.message}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="year">Year</label>
            <input type="number" name="year" id="year"  placeholder="YY"
              {...register("birthYear",validations.birthYear)}
            />
            {errors.birthYear && <span className="error-message">{errors.birthYear.message}</span>}
          </div>
        </div>

        <div className="button-wrapper">
          <hr />
          <button className="arrow-button">
            <img src={arrowIcon} alt="" />
          </button>
        </div>
      </form>
      <section className="age-display">
        <p className="years"><span>{age.years}</span> years</p>
        <p className="months"><span>{age.months}</span> months</p>
        <p className="days"><span>{age.days}</span> days</p>
      </section>
    </>

  )
}

export default App
