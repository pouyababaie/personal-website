import styles from './src-modules-shared--ui.module.scss';

/* eslint-disable-next-line */
export interface SrcModulesSharedUiProps {}

export function SrcModulesSharedUi(props: SrcModulesSharedUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SrcModulesSharedUi!</h1>
    </div>
  );
}

export default SrcModulesSharedUi;
