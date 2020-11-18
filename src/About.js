import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

function About() {
    return (
        <div>
            <Header />
            <Container className="aboutContent">
                <h1>Our Story</h1>
                <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus augue urna, vehicula id risus nec, tempor consectetur leo. Donec interdum ipsum eu justo faucibus, euismod suscipit elit tincidunt. Vivamus non tortor lacus. Vivamus eget turpis porta, convallis elit quis, tristique felis. Ut posuere erat a purus faucibus aliquet. Donec mollis sagittis ultrices. Morbi eget luctus nibh, nec malesuada dolor. Donec non neque imperdiet, rhoncus ante nec, malesuada sem. Donec sodales sem et lacus tempor, vel tincidunt ligula placerat. Mauris id risus sed mauris ornare condimentum. Aenean quis hendrerit velit. Aliquam erat volutpat. Nulla id mi molestie massa sodales ornare. Morbi iaculis fringilla libero, eget elementum mi sagittis a. Vestibulum sed varius urna.</p>

                <p>Quisque sit amet velit a augue aliquam pretium. Curabitur eget ultricies risus. Pellentesque tempus elit in lorem faucibus facilisis. Curabitur dapibus sed enim nec vestibulum. In quis mollis risus. Vestibulum nunc quam, convallis accumsan mollis in, viverra vitae nisi. Suspendisse cursus sapien vel leo lobortis, id luctus neque tincidunt. Phasellus vel sem arcu. Aliquam pharetra dignissim lorem, in feugiat dui sollicitudin vitae. Proin eget odio non neque sagittis elementum viverra vitae magna. Mauris eget ex diam. Morbi eleifend sodales diam, sed vulputate augue egestas eu. Nulla varius elementum risus nec rhoncus.</p>

                <p>Pellentesque pellentesque non metus pulvinar elementum. Fusce non lacus non odio interdum aliquam. Nunc nunc lacus, auctor vel nibh vitae, vehicula lacinia libero. Morbi condimentum velit sed quam semper, faucibus euismod tellus viverra. Praesent fermentum neque a magna interdum lacinia. Nulla facilisi. Ut maximus et velit eu consectetur. Integer posuere cursus eros, at ullamcorper elit dapibus at. Donec turpis ante, pulvinar vitae convallis nec, efficitur eget sem. Ut a feugiat augue, eu fringilla diam. Ut ut lectus tincidunt sapien pellentesque dignissim. Suspendisse eget tincidunt orci, id fringilla lorem. Nunc tincidunt, quam in maximus dapibus, purus nisi cursus libero, nec dictum dolor tortor consequat velit. Vestibulum at leo varius, feugiat felis id, luctus orci.</p>

                <p>Curabitur a orci sit amet leo laoreet consectetur. Fusce erat purus, consectetur vitae nibh a, aliquam sodales tortor. Etiam hendrerit, purus sit amet faucibus vehicula, lorem felis sagittis erat, at pellentesque eros quam a elit. Sed imperdiet vel justo vel imperdiet. Duis eleifend diam id ullamcorper placerat. Praesent eros erat, dictum aliquet tempor sit amet, dignissim quis metus. Ut quam felis, tincidunt non vestibulum id, tempus non metus. Donec euismod consequat tortor eu finibus. Phasellus suscipit pretium justo, id lacinia mi dictum nec. Nullam quis leo eros. Phasellus ut dignissim sapien, non gravida massa. Suspendisse nibh ante, luctus nec massa posuere, pulvinar fermentum sapien. Mauris quis finibus purus. Phasellus aliquet aliquet ex, non interdum magna semper sed.</p>
            </Container>
            <Footer />
        </div>
    )
}

export default About