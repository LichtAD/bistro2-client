import Banner from './Banner/Banner'
import Category from './Category/Category'
import PopularMenu from './PopularMenu/PopularMenu'
import Featured from './Featured/Featured'
import Testimonials from './Testimonials/Testimonials'

function Home() {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    )
}

export default Home