import ChangePageButton from '../components/ChangePageButton';
import SaveButton from '../components/SaveButton';
import './CreateCoursePage.css'
import '../components/ChangePageButton.css'
import '../components/SaveButton.css'

export default function CreateCoursePage() {
    return(
        <div className="create-page-container">
            <div className="div-left">
                <div className="back-button-container">
                    <ChangePageButton linkTo="/" buttonClassName="back-button" text="←" />
                </div>
                <h1> Create course </h1>
                <div>
                  <label>
                    Title <input name="title" />
                  </label>

                <div className="course-lessons-list">


                </div>



                </div>



                <div className="save-button-container">
                    <SaveButton buttonClassName="save-course-button" text="Save Course" />
                </div>
            </div>


            <div className="div-right">

                <h2 className="created-lessons-header"> Created Lessons </h2>


                <div className="create-lesson-button-container">
                    <ChangePageButton linkTo="/placeholder" buttonClassName="create-lesson-button" text="Create New Lesson" />
                </div>
            </div>
        </div>
    )
}