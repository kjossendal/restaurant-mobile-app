<template>
    <ion-tabs color="secondary">

        <ion-tab label="Home" tab="home" icon="home">
            <HeaderTabs :title="$user.email"/>
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

        <ion-tab label="Test" tab="test" icon="add">
            <HeaderTabs title="Test"/>
            <ion-content fullscreen>
                <Test />
            </ion-content>
        </ion-tab>

    </ion-tabs>
</template>
<script>
// TODO make these components, not screens
import HeaderTabs from '../components/HeaderTabs.vue'
import Test       from '../components/Test.vue'
import Rewards    from './Rewards.vue'
import Home       from './Home.vue'
import Menu       from './Menu.vue'

export default {
    components: {
        'HeaderTabs' : HeaderTabs,
        'Rewards' : Rewards,
        'Test' : Test,
        'Home' : Home,
        'Menu' : Menu
    },
}
</script>
