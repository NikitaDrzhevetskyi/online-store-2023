import styles from "../../chat.module.css";

const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" id={styles.check} />
      <label className={styles.chat_btn} htmlFor={styles.check}>
        <i className={`bi bi-chat-left-text-fill ${styles.comment}`}></i>
        <span className="position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
        <i className={`bi bi-x-circle-fill ${styles.close}`}></i>
      </label>
      <div className={styles.chat_wrapper}>
        <div className={styles.chat_header}>
          <h6>Let's Chat - Online</h6>
        </div>
        <div className={styles.chat_form}>
          <div className={styles.chat_msg}>
            {Array.from({ length: 20 }).map((_, id) => (
              <div>
                <p>
                  <b>You wrote:</b> Hello, world! This is a toast message.
                </p>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>Support wrote:</b> Hello, world! This is a toast message.
                </p>
              </div>
            ))}
          </div>
          <div className={styles.form_group}>
            <textarea
              id={styles.clientChatMsg}
              className={styles.form_control}
              placeholder="Your Text Message"
            ></textarea>
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserChatComponent;
