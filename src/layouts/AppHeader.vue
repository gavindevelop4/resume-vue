<template>
  <div class="top-container">
    <div class="left">
      <div class="name">Gavin Chan</div>
      <div class="summary">{{ summary }}</div>
      <!-- <div class="description">Eligible holder of Open Work Permit</div> -->
      <!-- <div class="description">Immediately Available</div> -->
      <div class="education">
        <font-awesome-icon icon="fa-solid fa-graduation-cap" class="icon" />
        <div>B.Sc., Statistics, The Chinese University of Hong Kong, 2015-2019</div>
      </div>

    </div>

    <div class="right">
      <div class="contact">
        <div class="item">
          <font-awesome-icon icon="fa-brands fa-linkedin" class="icon" />
          <div class="description"><a
              href="https://linkedin.com/in/gavinchandevelop">linkedin.com/in/gavinchandevelop</a></div>
        </div>

        <div class="item">
          <font-awesome-icon icon="fa-brands fa-github" class="icon" />
          <div class="description"><a href="https://github.com/gavindevelop4">github.com/gavindevelop4</a></div>
        </div>

        <div class="item">
          <font-awesome-icon icon="fa-solid fa-square-envelope" class="icon" />
          <div class="description"><a href="mailto:gavindevelop4@gmail.com">gavindevelop4@gmail.com</a></div>
        </div>

        <div class="item">
          <font-awesome-icon icon="fa-solid fa-square-phone" class="icon" />
          <div class="description">437-557-3979</div>
        </div>

        <div class="item">
          <font-awesome-icon icon="fa-solid fa-location-dot" class="icon" />
          <div class="description">North York, Ontario</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { summary } from '@/constants';

export default {
  name: "appHeader",
  computed: {
    summary() {
      return summary;
    }
  }
}
</script>

<style lang="scss">
.top-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 8px;
  gap: 12px;

  .left {
    border-bottom: 1px solid #717171;
  }
}

.name {
  font-size: 50.5px;
  font-weight: 700;
  margin-bottom: 0px;
  color: #00238e;
  line-height: 1.2;
}

.summary {
  font-size: 12px;
  color: #717171;
  // line-height: 1.6;
}

.description {
  line-height: 1.5;
}

.education {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 10.5px;
  margin-top: 4px;
  margin-bottom: 4px;

  .icon {
    width: 16px;
    height: 16px;
    margin-right: 5px;
    color: #00238e;
  }
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .contact {
    // margin-bottom: 16px;

    .item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 12px;
      margin-bottom: 12px;

      .icon {
        margin-right: 8px;
        width: 20px;
        height: 20px;
      }

      .description {
        color: #007BFF;

        a {
          color: #007BFF;
          text-decoration: none;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }


  }
}
</style>