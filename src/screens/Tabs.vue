<template>
    <ion-tabs color="secondary">

        <ion-tab label="Home" tab="home" icon="home">
            <HeaderTabs :title="$user.first_name || 'Home'"/>
            <ion-content fullscreen>
                <Home />
            </ion-content>
        </ion-tab>

        <ion-tab label="Menu" tab="menu" icon="list-box">
            <HeaderTabs title="Menu"/>
            <ion-content fullscreen>
                <Menu />
            </ion-content>
        </ion-tab>

        <ion-tab label="Rewards" tab="rewards" icon="gift">
            <HeaderTabs title="Rewards"/>
            <ion-content fullscreen>
                <Rewards />
            </ion-content>
        </ion-tab>

        <ion-tab label="Dashboard" tab="dashboard" icon="reorder">
            <HeaderTabs title="Dashboard"/>
            <ion-content fullscreen>
                <Dashboard />
            </ion-content>
        </ion-tab>

    </ion-tabs>
</template>
<script>
// TODO make these components, not screens
import HeaderTabs from '../components/HeaderTabs.vue'
// import Test       from '../components/Test.vue'

import Dashboard  from './Dashboard.vue'
import Rewards    from './RewardsTab.vue'
import Home       from './Home.vue'
import Menu       from './MenuTab.vue'

export default {
    components: {
        'HeaderTabs' : HeaderTabs,
        'Dashboard' : Dashboard,
        'Rewards' : Rewards,
        // 'Test' : Test,
        'Home' : Home,
        'Menu' : Menu
    },
}
</script>
