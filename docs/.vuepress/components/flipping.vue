<template>
<div>

  <transition-group tag="div" class="slide-group" :name="transitionName" @before-leave="sgBeforeLeave">
      <div :key="current" class="slide" @click="nav(1)">
        <div v-if="slides[current].isMember">
          <div class="grid">
            <div class="col-1-3">
              <img :src="slides[current].image" />
            </div>
            <div class="col-2-3">
              <div>
                <ul>
                  <li>ID: {{ slides[current].memberName }}</li>
                  <li>昵称: {{ slides[current].memberNickname }}</li>
                  <li>编号: {{ slides[current].memberID }}</li>
                  <li>职务: {{ slides[current].memberTitle }}</li>
                  <li>状态: {{ slides[current].memberState }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="grid">
          <img :src="slides[current].image" />
          <div v-html="slides[current].content"></div>
        </div>
      </div>

      <div key="checkbox">
        <div>
          <span class="slideup" @click="nav(1)">&gt;</span>
          <span class="slidedown" @click="nav(-1)">&lt;</span>
        </div>
        <!--
    <div>
      <label class="toggle"><input v-model="use3d" type="checkbox" /> 3D Transition</label>
    </div>
  -->
      </div>

  </transition-group>

  <!-- super simple 'preloader' for the images -->
  <div class="preloader">
    <img v-for="slide in slides" :src="slide.image" />
  </div>
</div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.nav(1);
    }, 200);
  },

  methods: {

    nav(dir) {
      this.dir = dir;
      var len = this.slides.length;
      // Loop around the array so last slide goes to first slide & vice-versa.
      this.current = ((this.current + dir % len) + len) % len;
    },

    // When transitioning an element out, applying `position: absolute` or `position: fixed` keeps the container from snapping in size dramatically and helps the whole transition run smoother.
    // You can use CSS on the `-leave-active` class (see commented out CSS in the CSS tab), but that often leads to the element flying out in weird directions or snapping to the edges of the container.
    // Instead, let's apply the positioning in JavaScript with `position: fixed` and the right positioning + sizing to elements that are leaving so they don't snap in odd ways.
    sgBeforeLeave(el) {
      var rect = el.getBoundingClientRect();
      el.style.width = (rect.right - rect.left) + 'px';
      el.style.height = (rect.bottom - rect.top) + 'px';
      el.style.position = 'fixed';
      el.style.top = rect.top + 'px';
      el.style.left = rect.left + 'px';
    }
  },

  computed: {
    transitionName() {
      return 'sg-' +
        (this.use3d ? '3d-' : '') +
        (this.dir > 0 ? 'right' : 'left');
    }
  },

  data: () => ({
    dir: 0,
    current: 0,
    use3d: false,
    slides: [{
        image: '/tuidao/logo.png',
      },
      {
        isMember: true,
        image: "/tuidao/member/3.png",
        memberName: "小宇宙·°",
        memberNickname: "拉勾勾de潴（翼魔斯乌）",
        memberID: "1号",
        memberTitle: "资料编写员",
        memberState: "退休（在职期间：2012年6月21~2014年8月5日）",
      },
      {
        isMember: true,
        image: "/tuidao/member/4.png",
        memberName: "丨叶枫丨",
        memberNickname: "叶枫",
        memberID: "2号",
        memberTitle: "资料编写员",
        memberState: "退休（在职期间：2012年6月21日~2017年）",
      },
      {
        isMember: true,
        image: "/tuidao/member/5.png",
        memberName: "lawlietmeng",
        memberNickname: "木木",
        memberID: "3号",
        memberTitle: "资料编写员",
        memberState: "离职（在职期间：2012年6月21日~2012年11月1日）",
      },
      {
        isMember: true,
        image: "/tuidao/member/6.png",
        memberName: "青灬之翼",
        memberNickname: "J.H",
        memberID: "4号",
        memberTitle: "村落考察员",
        memberState: "退休（在组期间：2012年6月21日~2014年）",
      },
      {
        isMember: true,
        image: "/tuidao/member/7.png",
        memberName: "Hughes",
        memberNickname: "小休",
        memberID: "5号",
        memberTitle: "村落考察员",
        memberState: "退休（在职期间：2012年6月21日~2012年7月27日）",
      },
      {
        isMember: true,
        image: "/tuidao/member/8.png",
        memberName: "镜水苍月",
        memberNickname: "苍月",
        memberID: "6号",
        memberTitle: "资料编写员",
        memberState: "退休（在职期间：2013年2月20日~2015年）",
      },
      {
        isMember: true,
        image: "/tuidao/member/9.png",
        memberName: "愛以希為貴",
        memberNickname: "Evan",
        memberID: "7号",
        memberTitle: "村落考察员",
        memberState: "离职（在职期间：2012年7月8日~2013年5月）",
      },
      {
        isMember: true,
        image: "/tuidao/member/10.png",
        memberName: "tgbhuy",
        memberNickname: "BOY",
        memberID: "8号",
        memberTitle: "村落考察员",
        memberState: "退休（在职期间：2013年4月16日~2016年）",
      },
      {
        isMember: true,
        image: "/tuidao/member/11.png",
        memberName: "阿查-查无此人",
        memberNickname: "阿查",
        memberID: "9号",
        memberTitle: "资料编写员",
        memberState: "退休（在职期间：2015年8月~2016年）",
      },
      {
        isMember: true,
        image: "/tuidao/member/12.png",
        memberName: "观察者",
        memberNickname: "Vanguard",
        memberID: "10号",
        memberTitle: "村落考察员",
        memberState: "退休（在职期间：2014年8月~2017年）",
      }
      /*
      {
        image: 'https://unsplash.it/800/300/?image=994',
        content: '<p>Page2</p>',
      }, {
        image: 'https://unsplash.it/800/300/?image=993',
        content: '<p>Page3</p>',
      }, {
        image: 'https://unsplash.it/800/300/?image=991',
        content: '<p>Page4</p>',
      }, {
        image: 'https://unsplash.it/800/300/?image=990',
        content: '<p>Page5</p>',
      }, {
        content: '<p>Maecenas vestibulum, nulla sed tincidunt viverra, lorem turpis aliquam urna, ut pretium orci purus consequat augue. Etiam a enim orci, vitae pulvinar odio.</p>'
      }*/
    ]
  }),
}
</script>

<style lang="less">
.grid {
    background: white;
    margin: 0 0 20;

    &:after {
        /* Or @extend clearfix */
        content: "";
        display: table;
        clear: both;
    }
}

.colrules() {
    float: left;
    padding-right: 20;
    padding-left: 20;
    .grid &:last-of-type {
        padding-right: 0;
    }
}

.col-2-3 {
    .colrules();
    width: 66.66%;
}
.col-1-3 {
    .colrules();
    width: 33.33%;
}

.sg-left,
.sg-right {

    // Class applied to the elements that will move. We set a longer duration here since we have a delay to prevent overlap between exiting & entering.
    &-move {
        transition: transform 0.6s cubic-bezier(.29,.15,.24,.97);
    }

    &-leave-active {
        transition: opacity 0.3s linear, transform 0.3s cubic-bezier(.64,.01,.67,.92);
    }

    &-enter-active {
        transition: opacity 0.3s linear, transform 0.3s cubic-bezier(.29,.15,.24,.97);
        transition-delay: 0.25s, 0.3s;
    }

    &-enter,
    &-leave-to {
        opacity: 0;
    }

    // When transitioning an element out, applying `position: absolute` or `position: fixed` keeps the container from snapping in size dramatically and helps the whole transition run smoother. You can use this simple CSS, but the element may snap in odd ways. See the JavaScript method `sgBeforeLeave` for a better way.
    // &-leave-active {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    // }

}

.sg-left-leave-to,
.sg-right-enter {
    transform: translateX(30%);
}

.sg-left-enter,
.sg-right-leave-to {
    transform: translateX(-30%);
}

/* ////////////////////////////////////////////////////////////////////////// */

.sg-3d-left,
.sg-3d-right {

    &-move {
        transition: transform 0.6s cubic-bezier(.29,.15,.24,.97);
    }

    &-enter-active,
    &-leave-active {
        transform: perspective(700px) rotateY(0deg);
    }

    &-leave-active {
        transition: transform 0.3s cubic-bezier(.64,.01,.67,.92), opacity 0.1s linear;
        transition-delay: 0s, 0.2s;
    }

    &-enter-active {
        transition: transform 0.3s cubic-bezier(.29,.15,.24,.97), opacity 0.1s linear;
        transition-delay: 0.2s, 0.2s;
    }

    &-enter,
    &-leave-to {
        opacity: 0;
    }

}

.sg-3d-left-leave-to,
.sg-3d-right-enter {
    transform: perspective(700px) translateZ(-300px) rotateY(90deg);
}

.sg-3d-left-enter,
.sg-3d-right-leave-to {
    transform: perspective(700px) translateZ(-300px) rotateY(-90deg);
}

/* ////////////////////////////////////////////////////////////////////////// */

.slide-group {
    width: 80%;
    max-width: 30em;
    margin: auto;
    text-align: center;
}

.slide {
    background: #FFF;
    text-align: left;
    border: solid 1px #ccc;
    padding: 1rem;
    margin: 1rem 0;
    img {
        display: block;
        margin-bottom: 1rem;
    }
}

.slideup {
    background-clip: text;
    text-shadow: rgba(200,200,200,0.5) 0 3px 3px;
    float: right;
    text-decoration: underline;
    &:hover {
        text-shadow: none;
        text-decoration: none;
    }
}

.slidedown {
    background-clip: text;
    text-shadow: rgba(200,200,200,0.5) 0 3px 3px;
    float: left;
    text-decoration: underline;
    &:hover {
        text-shadow: none;
        text-decoration: none;
    }
}

.preloader {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    padding: 1px;
    box-sizing: content-box;
    overflow: hidden;

}

</style>
