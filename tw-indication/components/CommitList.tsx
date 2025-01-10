import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    SectionList,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { Modalize } from 'react-native-modalize';

interface Commit {
    id: string;
    title: string;
    author: string;
    timestamp: string;
    type: 'Diễn biến';
    date: string;
};

interface CommitSection {
    title: string;
    data: Commit[];
};

interface CommitListProps {
    commits: Commit[];
    onCommitPress?: (commit: Commit) => void;
};

const CommitList: React.FC<CommitListProps> = ({ commits, onCommitPress }) => {
    const modalizeRef = useRef<Modalize>(null);
    const [selectedCommit, setSelectedCommit] = useState<Commit | null>(null);

    const getCommitTypeColor = (type: Commit['type']): string => {
        switch (type) {
            case 'Diễn biến':
                return '#64B5F6';
            default:
                return '#90A4AE';
        }
    };

    const groupCommitsByDate = (commits: Commit[]): CommitSection[] => {
        const grouped = commits.reduce((acc: { [key: string]: Commit[] }, commit) => {
            if (!acc[commit.date]) {
                acc[commit.date] = [];
            }
            acc[commit.date].push(commit);
            return acc;
        }, {});

        return Object.entries(grouped).map(([date, commits]) => ({
            title: date,
            data: commits,
        })).sort((a, b) => new Date(b.title).getTime() - new Date(a.title).getTime());
    };

    const handleCommitPress = React.useCallback((commit: Commit, event?: any) => {
        if (Platform.OS === 'android' && event?.persist) {
            event.persist();
        }

        setSelectedCommit(commit);

        if (onCommitPress) {
            onCommitPress(commit);
        }

        if (Platform.OS === 'android') {
            requestAnimationFrame(() => {
                modalizeRef.current?.open();
            });
        } else {
            modalizeRef.current?.open();
        }
    }, [onCommitPress]);

    const renderCommitItem = React.useCallback(({ item }: { item: Commit }) => {
        const typeColor = getCommitTypeColor(item.type);

        return (
            <TouchableOpacity
                style={styles.commitItem}
                onPress={(event) => handleCommitPress(item, event)}
            >
                <View style={styles.commitContent}>
                    <View style={styles.titleContainer}>
                        <View
                            style={[
                                styles.typeIndicator,
                                { backgroundColor: typeColor }
                            ]}
                        />
                        <Text style={styles.commitTitle}>
                            {item.type}: {item.title}
                        </Text>
                    </View>
                    <View style={styles.commitInfo}>
                        <View style={styles.authorContainer}>
                            <Text style={styles.authorText}>{item.author}</Text>
                            <Text style={styles.timestampText}>{item.timestamp}</Text>
                        </View>
                        <Text style={styles.commitId}>{item.id.substring(0, 7)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }, []);

    const renderSectionHeader = React.useCallback(({
        section: { title } }: {
            section: CommitSection
        }) => (
        <View style={styles.dateHeader}>
            <Text style={styles.dateHeaderText}>Ngày ra y lệnh | {title}</Text>
        </View>
    ), []);

    return (
        <View style={styles.container}>
            <SectionList
                sections={groupCommitsByDate(commits)}
                renderItem={renderCommitItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.listContent}
                stickySectionHeadersEnabled={true}
            />
            <Modalize
                ref={modalizeRef}
                onClose={() => setSelectedCommit(null)}
                handlePosition="inside"
                modalStyle={styles.modalContainer}
                handleStyle={styles.modalHandle}
                threshold={100}
                velocity={1000}
                snapPoint={400}
                withHandle={true}
                childrenStyle={styles.modalChildren}
            >
                {selectedCommit && (
                    <View style={styles.modalContent}>
                        <Text>Test</Text>
                    </View>
                )}
            </Modalize>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listContent: {
        paddingHorizontal: 16,
    },
    commitItem: {
        paddingVertical: 12,
    },
    commitContent: {
        gap: 8,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    typeIndicator: {
        width: 4,
        height: 16,
        borderRadius: 2,
    },
    commitTitle: {
        color: '#000',
        fontSize: 14,
        fontWeight: '500',
        flex: 1,
    },
    commitInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 12,
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    authorText: {
        color: '#8B949E',
        fontSize: 12,
    },
    timestampText: {
        color: '#8B949E',
        fontSize: 12,
    },
    commitId: {
        color: '#8B949E',
        fontSize: 12,
        fontFamily: 'monospace',
    },
    separator: {
        height: 1,
        backgroundColor: '#30363D',
    },
    dateHeader: {
        paddingVertical: 8,
        backgroundColor: '#fff',
    },
    dateHeaderText: {
        color: '#8B949E',
        fontSize: 12,
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    modalHandle: {
        backgroundColor: '#E0E0E0',
        width: 40,
    },
    modalContent: {
        padding: 16,
    },
    modalChildren: {
        paddingHorizontal: 16,
        paddingTop: 20,
    },
});

export default CommitList;
