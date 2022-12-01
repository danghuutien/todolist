const Header = ()=>{
    const headerStyle = {
        height : '100px',
        backgroundImage : 'url(./src/banner.jpg)',
        backgroundPosition: '50%',
        backgroundPositionX: '50%',
        backgroundPositionY: 'center',
    }

    const date = new Date()
    let current_day = date.getDay();
    
    // Biến lưu tên của thứ
    let day_name = '';
 
// Lấy tên thứ của ngày hiện tại
switch (current_day) {
    case 1:
        day_name = "Monday";
        break;
    case 2:
        day_name = "Tuesday";
        break;
    case 3:
        day_name = "Wednesday";
        break;
    case 4:
        day_name = "Thursday";
        break;
    case 5:
        day_name = "Friday";
        break;
    case 6:
        day_name = "Saturday";
        break
    default:
        day_name = "Sunday";

}

 
    
    // console.log('Header')
    return (
        <div className="bg-cover bg-no-repeat" style={headerStyle}>
            <p  className="text-white py-5 font-bold text-xl ml-5">{day_name}, {date.getDate()}/ {date.getMonth()+1}/ {date.getFullYear()}</p>
        </div>
    )
}

export default Header