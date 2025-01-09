import React from 'react';
import {
    View,
    Text,
    SectionList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

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

    const renderCommitItem = ({ item }: { item: Commit }) => {
        const typeColor = getCommitTypeColor(item.type);

        return (
            <TouchableOpacity
                style={styles.commitItem}
                onPress={() => onCommitPress?.(item)}
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
    };

    const renderSectionHeader = ({ section: { title } }: { section: CommitSection }) => (
        <View style={styles.dateHeader}>
            <Text style={styles.dateHeaderText}>Ngày ra y lệnh | {title}</Text>
        </View>
    );

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
});

export default CommitList;
