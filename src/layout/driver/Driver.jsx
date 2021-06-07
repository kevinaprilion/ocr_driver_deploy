import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'

//pages
import Dashboard from '../../pages/dashboard/Dashboard'
import Profile from '../../pages/profile/Profile'
import SuperPIC from '../../pages/superPIC/SuperPIC'
import PIC from '../../pages/pIC/PIC'
import Admin from '../../pages/admin/Admin'
import DriverPage from '../../pages/driverPage/DriverPage'
import Notification from '../../pages/notification/Notification'
import News from '../../pages/news/News'
import Information from '../../pages/information/Information'
import Report from '../../pages/report/Report'
import AbsentPage from '../../pages/absentPage/AbsentPage'
import ExpensePage from '../../pages/expensePage/ExpensePage'

function Driver() {
    return (
        <div className="flex mx-auto justify-center bg-gray-200">
            <div className="bg-white md:w-1/3 w-full h-screen shadow-2xl overflow-auto">
            <div className="mx-auto">
                <Sidebar />
                <Switch>
                    <Route path="/driver/dashboard" exact component={Dashboard} />
                    <Route path="/driver/profile" exact component={Profile} />
                    <Route path="/driver/super-pic" exact component={SuperPIC} />
                    <Route path="/driver/pic" exact component={PIC} />
                    <Route path="/driver/notifikasi" exact component={Notification} />
                    <Route path="/driver/admin" exact component={Admin} />
                    <Route path="/driver/driver" exact component={DriverPage} />
                    <Route path="/driver/news" exact component={News} />
                    <Route path="/driver/information" exact component={Information} />
                    <Route path="/driver/report" exact component={Report} />
                    <Route path="/driver/absent" exact component={AbsentPage} />
                    <Route path="/driver/pengeluaran" exact component={ExpensePage} />
                    <Redirect from="/driver" to="/driver/dashboard" />
                </Switch>
            </div>
            </div>
         </div>
    )
}

export default Driver
