<template>
    <div class="popup_wrapper" ref="popup_wrapper">
         <div class="v-popup">
        <div class="v-popup__header">
            <span>{{popupTitle}}</span>
            <span>
                <i 
                class="material-icons"
                @click="closePopup"
                >close</i>
            </span>
        </div>
        <div class="v-popup__content">
            <slot></slot>
        </div>
        <div class="v-popup__footer">
            <button class="close-modal" @click="closePopup">Close</button>
            <button 
            class="submit-btn"
            @click="rightBtnAction"
            >{{rightBtnTitle}}</button>  
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "v-popup",
    props:{
        popupTitle:{
            type: String,
            default: 'Popup name'
        },
        rightBtnTitle:{
            type: String,
            default: 'Ok'
        }
    },
    data(){
        return{}
    },
    methods:{
        closePopup(){
            this.$emit('closePopup')
        },
        rightBtnAction(){
            this.$emit('rightBtnAction')
        }
    },
    mounted(){
        let vm = this
        document.addEventListener('click', function(item){
            if(item.target === vm.$refs['popup_wrapper']){
                vm.closePopup()
            }
        })
    }
}
</script>

<style lang="scss">
    .popup_wrapper{
        background: rgba(#646464, .4);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 5;
    }
    .v-popup{
        padding: 16px;
        position: fixed;
        top: 30%;
        width: 400px;
        background: #fff;
        box-shadow: 0 0 17px 0 #e7e7e7;
        
        &__header,
        &__footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__content{
             display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .submit-btn{
        padding: 8px;
        color: #fff;
        background: #26ae68;
        border: none;
    }
    .close-modal{
        padding: 8px;
        color: #fff;
        background: red;
        border: none;
    }
</style>