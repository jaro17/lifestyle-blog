<script>
export default {
  name: "Contact-component"
}
</script>

<template>
<div class="uk-container uk-container-medium uk-margin-large-bottom uk-margin-xlarge-top">
    <div class="uk-grid">
      <div class="uk-width-3-4@m left-side uk-flex uk-flex-column">
        <div class="uk-text-default uk-text-bold uk-margin-medium-top">Get in Touch</div>

        <div class="form uk-flex uk-flex-column uk-margin-medium-top">
          <div class="form-group uk-flex uk-flex-between uk-flex-middle uk-child-width-3-4">
            <div class="uk-margin uk-pad uk-margin-right">
              <input class="uk-input" type="text" placeholder="Name" aria-label="Input">
            </div>
            <div class="uk-margin uk-margin-left">
              <input class="uk-input" type="text" placeholder="Email" aria-label="Input" style="margin-bottom: 1rem">
            </div>
          </div>
          <div>
            <input class="uk-input uk-margin-medium-bottom" type="text" placeholder="Subject" aria-label="Input">
          </div>
          <div>
            <textarea class="uk-textarea">Comment</textarea>
          </div>
        </div>

        <button class="button uk-button uk-width-1-4  uk-box-shadow-medium uk-button-default uk-button-large uk-box-shadow-medium uk-margin-medium-top">
          send message
        </button>
      </div>

      <div class="uk-width-1-4@m right-side">
        <input class="input uk-input uk-text-italic" type="text" placeholder="Email" aria-label="Input" style="margin-bottom: 1rem">
        <div class="uk-text-default uk-text-bold uk-margin-medium-top">Subscribe to my newsletter</div>
        <input class="uk-input uk-text-italic uk-margin-top" type="text" placeholder="Your e-mail here" aria-label="Input" style="margin-bottom: 1rem">
        <button class="button uk-button  uk-box-shadow-medium uk-button-default uk-button-large uk-box-shadow-medium uk-margin-medium-top">
          subscribe
        </button>

        <div class="social uk-margin-medium-bottom uk-margin-medium-top">
         <a  uk-icon="icon: pinterest; ratio: 0.7" class="icon" uk-tooltip="Pinterest"></a>
          <a  uk-icon="icon: facebook; ratio: 0.7" class="icon" uk-tooltip="Facebook"></a>
          <a  uk-icon="icon: twitter; ratio: 0.7" class="icon" uk-tooltip="Twitter"></a>
          <a  uk-icon="icon: dribbble; ratio: 0.7" class="icon" uk-tooltip="Dribbble"></a>
          <a  uk-icon="icon: behance; ratio: 0.7" class="icon" uk-tooltip="Behance"></a>
          <a  uk-icon="icon: linkedin; ratio: 0.7" class="icon" uk-tooltip="LinkedIn"></a>
      </div>
      </div>

    </div>
  </div>

  <hr>
  <div class="follow uk-text-default uk-text-bold uk-margin-medium-top uk-text-center">Follow us @ Instagram</div>

</template>

<style scoped lang="scss">
.left-side {
  input, textarea {
    border: none;
    border-bottom: 1px solid #ccc;
  }

  .button {
     &:hover {
        background-color: #314b80;
        color: #fff;
      }
  }
}

.right-side {
  .input {
    border: none;
    border-bottom: 1px solid #ccc;
  }
.button {
     &:hover {
        background-color: #314b80;
        color: #fff;
      }
  }
  .social {
      .icon {
        text-decoration: none;
        margin: 0 0.5rem;
        color: #000;
      }
  }
}



.follow {
  color: #000;
}

@media(max-width: 767px) {
  .left-side {
    .button {
      margin: 0 auto;
      padding: 0.1rem;

    }
  }

  .right-side {
    .button {
      margin: 0 auto;
    }
  }
}
</style>