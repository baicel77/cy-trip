<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div class="landlord-content" v-if="landlordModule">
        <div class="topScroll">
          <img :src="landlordModule.topScroll" alt="">
        </div>
        <div class="header">
          <div class="left">
            <div class="hotelLogo">
              <img :src="landlordModule.hotelLogo" alt="">
            </div>
            <div class="name-info">
              <div class="name">{{ landlordModule.hotelName }}</div>
              <div class="item-wrap">
                <template v-for="(item, index) in landlordModule.hotelTags" :key="index">
                  <div class="item" :style="{ color: item.tagText.color }">
                    {{ item.tagText.text }}
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="contract">联系房东</div>
        </div>
        <div class="hotelSummary">
          <template v-for="(item, index) in landlordModule.hotelSummary" :key="index">
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="introduction">{{ item.introduction }}</div>
              <div class="tip">{{ item.tip }}</div>
            </div>
          </template>
        </div>

      </div>
      
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
import useDetail from '@/stores/modules/detail';
import { computed } from 'vue';
const detailStore = useDetail()
const landlordModule = computed(() => {
  return detailStore.houseDetailList.mainPart?.dynamicModule.landlordModule
})

</script>

<style lang="less" scoped>

.landlord {
  .landlord-content {
    .topScroll {
      img {
        width: 100%;
      }
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0 50px;
      .left {
        display: flex;
        align-items: center;
        .hotelLogo {
          width: 54px;
          img {
            width: 100%;
          }
        }
        .name-info {
          margin-left: 5px;
          .name {
            font-weight: 600;
            color: #000;
            font-size: 16px;
          }
          .item-wrap {
            display: flex;
            font-size: 12px;
            .item:not(:last-child) {
              &::after {
                display: inline-block;
                position: relative;
                top: 2px;
                content: '';
                width: 1px;
                height: 12px;
                background-color: #9b9b9b;
                margin: 0 5px;
              }
            }
          }
        }
      }
      .contract {
        height: 24px;
        line-height: 24px;
        text-align: center;
        background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
        padding: 0 8px;
        border-radius: 5px;
        color: #fff;
        font-size: 12px;
      }
    }
    .hotelSummary {
      display: flex;
      margin-bottom: 25px;
      .item {
        flex: 1;
        font-size: 12px;
        .title {
          color: #999;
        }
        .introduction {
          margin: 6px 0;
          color: #333;
          font-weight: 600;
          font-size: 16px;
        }
        .tip {
          color: #666;
        }
      }
    }
  }
}

</style> 