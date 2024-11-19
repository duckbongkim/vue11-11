<template>
<div>
    
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal">Modal</button>
    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#userModal3">userModal3</button>

    <slot-modal modalId=userModal2>

        <template v-slot:title>안녕하세요. 모달창 타이틀입니다.</template>
        <template v-slot:body>
            <div class="row gy-2">
                <p>모달</p>
                <p>모달2</p>
                <p>모달3</p>
            </div>
        </template>

        <template v-slot:footer>
            <button class="btn btn-secondary" data-bs-dismiss='modal'></button>
        </template>

    </slot-modal><!-- slot-modal == 컴포넌트 안에 있는 SlotModal 과 동일 // 템플릿 안에서는 대소문자 구별이 안되어 - 으로 구별-->
    

    <slot-modal>
        <template v-slot:title>사용자 입력창</template>

        <template v-slot:body>
           
            <div class="row gy-2">
                <div class="col-3">
                    <label class="form-label">이메일 주소</label>
                </div>
                <div class="col-9">
                    <input type="email" name="" id="" class="form-control" />
                </div>

                <div class="col-3">
                    <label class="form-label">전화번호</label>
                </div>
                <div class="col-9">
                    <input type="tel" name="" id="" class="form-control" />
                </div>

                
                <div class="col-3">
                    <label class="form-label">주소</label>
                </div>
                <div class="col-9">
                    <input type="text" name="" id="" class="form-control" />
                </div>
                
            </div>
        </template>

        <template v-slot:footer>
            <button class="btn btn-primay">저장</button>
            <button class="btn btn-danger" data-bs-dismiss="modal">닫기</button>
        </template>
    </slot-modal>


    <slot-modal modalId=userModal3>
        <template v-slot:title> 안녕하세요.제가 만든 모달창 입니다. </template>

        <template v-slot:body>

            <div class="row gy-2">
                <div class="col-3">
                    <label class="form-label">이름</label>
                </div>
                <div class="col-9">
                    <input type="email" name="" id="" class="form-control" />
                </div>

                <div class="col-3">
                    <label class="form-label">몸무게</label>
                </div>
                <div class="col-9">
                    <input type="tel" name="" id="" class="form-control" />
                </div>

                
                <div class="col-3">
                    <label class="form-label">키</label>
                </div>
                <div class="col-9">
                    <input type="text" name="" id="" class="form-control" />
                </div>
                
            </div>

        </template>

        <template v-slot:footer>
            <button data-bs-dismiss="modal">저장 안함</button>
            <button>저장</button>
        </template>
    </slot-modal>
</div>

</template>

<script>

import SlotModal from '@/components/flament/slotModal.vue';


export default{ 
    name:'',
    components:{ SlotModal },
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>