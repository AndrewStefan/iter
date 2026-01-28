import ChangePageButton from '../components/ChangePageButton';
import InfoPopup from '../components/InfoPopup';
import './MainPage.css'
import '../components/ChangePageButton.css'
import '../components/InfoPopup.css'

export default function MainPage() {
    return(
        <div className="main-page-container">
            <h1> Iter Lingua </h1>
            <div className="create-buttons-container">
                <ChangePageButton linkTo="/" linkClassName="course-link" buttonClassName="course-button start-course-button" text="Start course" />
            </div>
            <div className="create-buttons-container">
                <ChangePageButton linkTo="/create-course" linkClassName="course-link" buttonClassName="course-button create-course-button" text="Create course" />
                <ChangePageButton linkTo="/" linkClassName="course-link" buttonClassName="course-button load-course-button" text="Load course"/>
            </div>
            <InfoPopup classNameContainer="main-info-container" text="some about info"/>
        </div>
    )
}