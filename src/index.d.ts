declare module 'react-idle' {
	interface idleFunction extends Function {
		(idle: {idle: boolean}): any;
	}
	type Props = {
		render?: idleFunction;
		onChange?: idleFunction;
		timeout?: number;
		events?: string[];
		defaultIdle?: boolean
	};

	const Idle: React.ComponentClass<Props>;

	export default Idle;
}
