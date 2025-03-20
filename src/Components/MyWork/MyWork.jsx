import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon  from '../../assets/arrow_icon.svg'
import github_icon from '../../assets/github_icon.svg'; // Add GitHub icon


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" />
        })}
      </div>
      <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="github-button">
        More projects on <img src={github_icon} alt="GitHub" />
      </a>
    </div>
  )
}

export default MyWork
