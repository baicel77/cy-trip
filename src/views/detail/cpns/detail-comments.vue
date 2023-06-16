<template>
  <div class="comments">
    <detail-section title="热门评论" :more-text="`查看全部${commentModule?.totalCount}条评论`">
      <div class="comment-content" v-if="commentModule">
        <div class="top">
          <div class="left">
            <div class="rate">
              <div class="text">{{ commentModule.overall }}</div>
              <div class="line"></div>
            </div>
            <div class="overall">
              <div class="scoreTitle">{{ commentModule.scoreTitle }}</div>
              <div class="totalCount">{{ commentModule.totalCount }}条评论</div>
              <van-rate v-model="commentModule.overall" 
              readonly allow-half color="#ff9854" size="12" />
            </div>
          </div>
          <div class="right">
            <template v-for="item in commentModule.subScores">
              <div class="item">{{ item }}</div>
            </template>
          </div>
        </div>
        <div class="commentTags">
          <template v-for="(item, index) in commentModule.commentTagVo" :key="index">
            <div class="item" :style="{ color: item.color }">{{ item.text }}</div>
          </template>
        </div>
        <div class="comment">
          <div class="userInfo">
            <div class="avatars">
              <img :src="commentModule.comment.userAvatars" alt="">
            </div>
            <div class="name">
              <div class="text">{{ commentModule.comment.userName }}</div>
              <div class="checkInDate">{{ commentModule.comment.checkInDate }}</div>
            </div>
          </div>
          <div class="detail">{{ commentModule.comment.commentDetail }}</div>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>

import DetailSection from '@/components/detail-section/detail-section.vue';
import useDetail from '@/stores/modules/detail';
import { computed } from 'vue';
const detailStore = useDetail()
const commentModule = computed(() => {
  return detailStore.houseDetailList?.mainPart?.dynamicModule.commentModule
})

</script>


<style lang="less" scoped>
.comments {
  .comment-content {
    .top {
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        .rate {
          .text {
            font-size: 48px;
            font-weight: 600;
            color: #333;
          }
          .line {
            position: relative;
            top: -10px;
            width: 66px;
            height: 6px;
            background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
            border-radius: 3px;
          }
        }
        .overall {
          display: flex;
          flex-direction: column;
          margin-left: 15px;
          font-size: 12px;
          .scoreTitle {
            color: #333;
          }
          .totalCount {
            color: #999;
            margin: 5px 0;
          }
        }
      }
      .right {
        flex: 1;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-left: 40px;
        color: #666;
        font-size: 12px;
      }
    }
    .commentTags {
      margin: 10px 0 5px 0;
      display: flex;
      flex-wrap: wrap;
      color: #666;
      font-size: 12px;
      .item {
        background-color: #f5f5f5;
        border-radius: 2px;
        padding: 2px 5px;
        margin: 0 8px 5px 0;
      }
    }
    .comment {
      background-color: #f7f9fb;
      color: #333;
      font-size: 12px;
      padding: 10px;
      .userInfo {
        display: flex;
        align-items: center;
        .avatars {
          width: 32px;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 10px;
          img {
            width: 100%;
          }
        }
        .name {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .text {
            color: #000;
            font-size: 14px;
          }
          .checkInDate {
            margin-top: 2px;
            color: #999;
          }
        }
      }
      .detail {
        margin-top: 20px;
      }
    }
  }
}
</style>