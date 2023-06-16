<template>
  <div class="facility">
    <detail-section title="房屋设施" more-text="查看全部实施">
      <div class="detail" v-if="houseFacility">
        <template v-for="(item, index) in houseFacility.houseFacilitys" :key="item.groupId">
          <div class="item" v-if="houseFacility.facilitySort.includes(index)">
            <div class="groupName">
              <img :src="item.icon" alt="">
              <div class="text">{{ item.groupName }}</div>
            </div>
            <div class="facilitys-wrap">
              <div class="facilitys" 
              v-for="(citem, cindex) in item.facilitys.slice(0, 4)"
              :key="cindex">
                <van-icon name="passed" size="12" color="rgb(23, 210, 188)"/>
                <span class="name">{{ citem.name }}</span>
              </div>
            </div>
            
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue'
import useDetail from '@/stores/modules/detail';
import { computed } from 'vue';
const detailStore = useDetail()

const houseFacility = computed(() => 
detailStore.houseDetailList?.mainPart?.dynamicModule.facilityModule.houseFacility
)


</script>

<style lang="less" scoped>
.facility {
  .detail {
    background-color: #f7f9fb;
    padding: 25px 15px 5px;
    font-size: 12px;
    color: #000;
    .item {
      display: flex;
      margin-bottom: 20px;
      align-items: flex-start;
      .groupName {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 25px;
        width: 60px;
        text-align: right;
        img {
          width: 20px;
        }
        .text {
          margin-top: 4px;
        }
      }
      .facilitys-wrap {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        .facilitys {
          flex-shrink: 0;
          width: 50%;
          margin-bottom: 10px;
          .name {
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>