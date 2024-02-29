<article>
  <section>
    <h1>FullVue</h1>
    <h2>Contact Us</h2>
    <p>Reach out to us if you have questions or would like to schedule a customized demo!</p>
  </section>
  <section>
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact">
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" required autocomplete="name" />
      </div>
      <div>
        <label for="company">Company</label>
        <input type="text" name="company" id="company" required autocomplete="organization" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" autocomplete="email" />
      </div>
      <div>
        <label for="phone">Phone</label>
        <input type="tel" name="phone" id="phone" autocomplete="tel" />
      </div>
      <div class="message_container">
        <label for="message">Message</label>
        <textarea name="message" id="message" />
      </div>
      <div class="submit_container">
        <button type="submit">Submit</button>
      </div>
    </form>
  </section>
</article>
<style lang="scss">
  article {
    width: 100%;
    padding: 12px;
    margin-bottom: 2em;
    form {
      div {
        margin-top: 1em;
        label {
          display: inline-block;
          min-width: 90px;
          font-weight: bold;
        }
        input, textarea {
          min-width: 260px;
          border-radius: 5px;
          background: rgb(249, 250, 250);
          border: 1px solid rgb(181, 189, 196);
          font-size: 16px;
          height: 40px;
          line-height: 24px;
          padding: 7px 8px;
          color: rgb(8, 9, 10);
          box-shadow: none;
          :focus{
              background-color: #fff;
              border-color: #3b49df;
              box-shadow: 1px 1px 0 #3b49df;
          }
        }
      }
      .message_container {
        display: flex;
        align-items: center;
      }
      .submit_container {
        button {
          background: #416a98;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (min-width: 920px) {
    article {
      max-width: 920px;
      margin: 0 auto 2em auto;

      form div input, form div textarea {
        min-width: 420px;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    article {
      max-width: 1200px;
    }
  }
  
</style>

